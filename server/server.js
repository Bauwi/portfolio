require("./config/config.js");

const express = require("express");
const _ = require("lodash");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

const { mongoose } = require("./db/mongoose");
const { Project } = require("./models/project");
const { User } = require("./models/user");
const { authenticate } = require("./middleware/authenticate");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

/* ************************************************************* */
/* Add Headers for developpment mode                             */
/* ************************************************************* */

if (!process.env.NODE_ENV && port !== 3001) {
  app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Headers", "x-auth, content-type");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
  });
}

app.post("/projects", authenticate, (req, res) => {
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    _creator: req.user._id
  });

  project.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/projects", authenticate, (req, res) => {
  Project.find({
    _creator: req.user._id
  }).then(
    projects => {
      res.send({ projects });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/projects/:id", authenticate, (req, res) => {
  const { id } = req.params;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Project.findOne({
    _id: id,
    _creator: req.user._id
  })
    .then(project => {
      if (!project) {
        return res.status(404).send();
      }
      res.send({ project });
    })
    .catch(e => res.status(400).send());
});

app.delete("/projects/:id", authenticate, (req, res) => {
  const { id } = req.params;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Project.findOneAndRemove({
    _id: id,
    _creator: req.user._id
  })
    .then(project => {
      if (!project) {
        return res.status(404).send();
      }

      res.status(200).send({ project });
    })
    .catch(e => res.status(400).send());
});

app.patch("/projects/:id", authenticate, (req, res) => {
  const { id } = req.params;
  const body = _.pick(req.body, ["text", "completed"]);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Project.findOneAndUpdate(
    {
      _id: id,
      _creator: req.user._id
    },
    { $set: body },
    { new: true }
  )
    .then(project => {
      if (!project) {
        return res.status(404).send();
      }

      res.send({ project });
    })
    .catch(e => res.status(400).send());
});

app.post("/users", async (req, res) => {
  const user = new User(_.pick(req.body, ["password", "username"]));
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.header("x-auth", token).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/users/me", authenticate, (req, res) => {
  res.send(req.user);
});

app.post("/users/login", async (req, res) => {
  const body = _.pick(req.body, ["username", "password"]);

  try {
    const user = await User.findByCredentials(body.username, body.password);
    const token = await user.generateAuthToken();
    res.header("x-auth", token).send({
      _id: user._id,
      username: user.username,
      token
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

/* Remove token on log out */

app.delete("/users/me/token", authenticate, async (req, res) => {
  try {
    await req.user.removeToken(req.token);
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = { app };