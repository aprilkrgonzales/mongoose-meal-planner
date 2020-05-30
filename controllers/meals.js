const Meal = require('../models/meal');

module.exports = {
    getNewMealForm,
    getAllMeals,
    createNewMeal,
}

function createNewMeal(req, res) {
    Meal.create(req.body, function(err, newMeal) {
        console.log(req.body.name,'<--------Meal');
        res.redirect('/meals');
    })
}

function getAllMeals(req, res) {
    Meal.find({}, function(err, allMealsFromDb) {
        res.render('userViews/groceries', {
            allMealsReferenceForEJS: allMealsFromDb
        })
    })
}

function getNewMealForm(req, res) {
    res.render('userViews/new');
}