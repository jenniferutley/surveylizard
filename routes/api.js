const router = require("express").Router()
let Survey = require("../models/survey")

router.route("/").get((req, res) => {
  Survey.find()
    .then(surveys => res.json(surveys))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/:id").get((req, res) => {
  Survey.findById(req.params.id)
    .then(survey => res.json(survey))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
  const name = req.body.name
  const description = req.body.description
  const items = req.body.items
  const newSurvey = new Survey({name, description, items})

  newSurvey.save()
    .then(() => res.json("Survey added!"))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/update/:id").post((req, res) => {
  Survey.findById(req.params.id)
    .then(survey => {
      survey.name = req.body.name
      survey.description = req.body.description

      survey.save()
        .then(() => res.json("Survey updated!"))
        .catch(err => res.status(400).json("Error: " + err))
    })
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/:id").delete((req, res) => {
  Survey.findByIdAndDelete(req.params.id)
    .then(() => res.json("Survey deleted."))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router