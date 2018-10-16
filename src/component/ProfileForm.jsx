import React from 'react';
import '../style/style.css';
import {
    Grid, Row, Col, Panel, Button, FormControl, FormGroup,
    InputGroup, Dropdown, DropdownButton, MenuItem, Modal, Image, Table, Checkbox, ControlLabel
} from 'react-bootstrap';
import CandidateList from './CandidateList';

class ProfileForm extends React.Component {

    constructor() {
        super()
        this.state = {
            formData: { 'name': '', 'emailUrl': '', 'facebookUrl': '', 'twitterUrl': '', 'linkedInUrl': '' },
            personList: []
        }
    }

    handleChange(e) {
        var temp = this.state.formData;
        temp[e.target.name] = e.target.value;
        this.setState({
            formData: temp
        })
    }

    saveData(e) {
        var temp = this.state.personList;
        temp.push(this.state.formData)
        this.setState({
            personList: temp
        },() => {
            this.setState({
                formData: { 'name': '', 'emailUrl': '', 'facebookUrl': '', 'twitterUrl': '', 'linkedInUrl': '' }
            })
        })
    }

    render() {
        return (
            <div>

                <div className='personalInfo'>
                    Personal Info
                </div>

                <div className='container'>

                    <div className='upperDiv'>
                        <label>Name</label>
                        <div>
                            <input type='text' name='name' placeholder='Name' value={this.state.formData.name} onChange={(e) => this.handleChange(e)} />
                        </div>
                    </div>
                    <div className='upperDiv'>
                        <label>Email Id</label>
                        <div>
                            <input type='text' name='emailUrl' placeholder='Email Id' value={this.state.formData.emailUrl} onChange={(e) => this.handleChange(e)} />
                        </div>
                    </div>

                    <div className='innerContainer'>

                        <div className='innerContainerOuter'>
                            <label>Facebook Profile</label>
                            <div>
                                <input type='text' name='facebookUrl' placeholder='www.facebook.com/johndoe' value={this.state.formData.facebookUrl} onChange={(e) => this.handleChange(e)} />
                            </div>
                        </div>

                        <div className='innerContainerOuter'>
                            <label>Twitter Profile</label>
                            <div>
                                <input type='text' name='twitterUrl' placeholder='www.twitter.com/johndoe' value={this.state.formData.twitterUrl} onChange={(e) => this.handleChange(e)} />
                            </div>
                        </div>

                        <div className='innerContainerOuter'>
                            <label>LinkedIn Profile</label>
                            <div>
                                <input type='text' name='linkedInUrl' placeholder='www.linkedin.com/johndoe' value={this.state.formData.linkedInUrl} onChange={(e) => this.handleChange(e)} />
                            </div>
                        </div>

                    </div>


                    <div className='button'>
                        <button onClick={(e) => this.saveData(e)}>Save</button> 
                    </div>

                </div>

            </div>

        )
    }
}

export default ProfileForm;