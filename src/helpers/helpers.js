export const handleChange = e => this.setState({[e.target.name]:e.target.value});

export const handleSubmit = e => {
    e.preventDefault();
    this.props.addIngredient(this.state)
}