import React from 'react';

class CandidateList extends React.Component {

        componentWillMount() {
            console.log(this.props);
        }

    render() {
        return (
            <div>
                <div className='listContainer'>
                    <div className='listOuterDiv'>
                        <div className='listButton'>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>

                        <div style={{ clear: 'both'}}>
                            <div style={{float:'left',width:'35%'}}>
                                <img className='imgDiv' src='http://midevocional.org/wp-content/uploads/2015/09/Di%C3%A1logos-con-uno-mismo.jpg' />
                            </div>
                            <div style={{float:'left',width:'45%'}}>
                                <label>Nabhdeep SIngh</label>
                                <label>Nabhdeep Singh</label>
                                </div>
                        </div>

                    </div>
                    <div className='listOuterDiv'>
                    </div>
                    <div className='listOuterDiv'>
                    </div>
                </div>
            </div>
        )
    }
}

export default CandidateList;