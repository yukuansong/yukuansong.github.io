import React, {Component} from 'react'

class Form extends Component {
    initState = {
        name: " ",
        job: " "
    }
    
    state = this.initState

    handleChange = (event) => {

        const {name,value} = event.target

        this.setState({
            [name]: value
        })

    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
      }

    render() {
        const {name, job} = this.state
        const onSubmit = this.props.submitHandler
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                
                <label htmlFor="job">Job</label>
                <input 
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form