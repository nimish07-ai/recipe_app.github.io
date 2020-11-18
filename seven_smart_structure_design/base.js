class api_navigate
{
    base="https://api.spoonacular.com/recipes/"
    cuisine_val={
        1:"African",
        2:"American",
        3 :"British",
        4:"Chinese",
        5:"French",
        6:"Indian",
        7:"Korean",
        8:"Mexican",
    }
    //
    // search
    // search()
    // {
    //     return
    // }
    

    information(id)
    {

        return `${this.base}/${id}/information?fakevalue=abc`
    }
    //by ingrident
    //similar
    similar(id)
    {

        return `${this.base}/${id}/similar?fakevalue=abc`
    }
    informationBulk(ev)
    {
        return `${this.base}/informationBulk?ids=${ev}`
    }
    //smart search
    smart_search(val)
    {

        return `${this.base}autocomplete?number=7&query=${val}`
    }
    random()
    {
        // https://api.spoonacular.com/recipes/random
        return `${this.base}random?number=4`
    }

    //by id
    //nutrition widgit
    nutrition_widgit(id)
    {
        return `${this.base}${id}/nutritionWidget.json`
    }

    ingrident_widgit(id)
    {
        return `${this.base}${id}/ingredientWidget?fakevalue=abc`
    }


    //summarise recipe
    summary(id)
    {
        return `${this.base}${id}/summary?fakevalue=abc`
    }

    cuisine(val)
    {
        return`${this.base}/search?cuisine=${this.cuisine_val[val]}`
    }
}

export default api_navigate;