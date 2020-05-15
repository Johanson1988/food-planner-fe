import React, {Component} from 'react';

export default class AddIngredient extends Component {
    state = {
        name: null,
        kcal: null,
        fats: null,
        saturatedFats: null,
        carboHydrates: null,
        sugar: null,
        proteins: null,
        salt: null,
        brand: null,
        type: null,
        fiber: null
    };

    handleChange = e => this.setState({[e.target.name]:e.target.value});

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' onChange={this.handleChange} />
                <label htmlFor='kcal'>Kcal</label>
                <input type='number' name='kcal' onChange={this.handleChange} />
                <label htmlFor='fats'>Fats</label>
                <input type='number' name='fats' onChange={this.handleChange} />
                <label htmlFor='saturatedFats'>Saturated Fats</label>
                <input type='number' name='saturatedFats' onChange={this.handleChange} />
                <label htmlFor='carboHydrates'>CarboHydrates</label>
                <input type='number' name='carboHydrates' onChange={this.handleChange} />
                <label htmlFor='sugar'>Sugar</label>
                <input type='number' name='sugar' onChange={this.handleChange} />
                <label htmlFor='proteins'>Proteins</label>
                <input type='number' name='proteins' onChange={this.handleChange} />
                <label htmlFor='salt'>Salt</label>
                <input type='number' name='salt' onChange={this.handleChange} />
                <label htmlFor='fiber'>Fiber</label>
                <input type='number' name='fiber' onChange={this.handleChange} />
                <label htmlFor='type'>Type</label>
                <select name="type" onChange={this.handleChange} defaultValue={'default'}>
                <option value="default" disabled hidden>Select an Option</option> 
                    <option value="legumes">legumes</option>
                    <option value="edible plants">edible plants</option>
                    <option value="edible fungi">edible fungi</option>
                    <option value="edible nuts and seeds">edible nuts and seeds</option>
                    <option value="baked goods">baked goods</option>
                    <option value="breads">breads</option>
                    <option value="dairy products">dairy products</option>
                    <option value="eggs">eggs</option>
                    <option value="meat">meat</option>
                    <option value="cereals">cereals</option>
                    <option value="seafood">cereals</option>
                </select>
                <label htmlFor='brand'>Brand</label>
                <input type='text' name='brand' onChange={this.handleChange} />

                <button type='submit'>Submit</button>
            </form>
        )
    }
}