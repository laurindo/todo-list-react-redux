import React, { Component } from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconbutton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add, changeDescription, search, clear } from './todoActions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        const {add, description, search, clear} = this.props;
        if (e.key === 'Enter') {
            //modo anterrior que funciona normalemente  
            //e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();

            //outra maneira que tambem funciona
            e.shiftKey ? search() : add(description);    
        } else if (e.key === 'Escape') {
            clear();
        }
    }

    render() {
        const {add, description, search} = this.props;
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 8 9'>
                    <input id='description' 
                        type="text" 
                        className='form-control' 
                        placeholder='Adicione uma tarefa' 
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler} 
                        value={this.props.description} />
                </Grid>

                <Grid cols='12 4 3'>
                    <IconButton style='primary' icon='plus' onClick={() => add(description)}></IconButton>
                    <IconButton style='info' icon='search' onClick={() => search()}></IconButton>
                    <IconButton style='default' icon='close' onClick={this.props.clear}></IconButton>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({ description: state.todos.description });
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);