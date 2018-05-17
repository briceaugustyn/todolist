import React, { Component } from "react";
import TodoItems from "./TodoItems";
//import "./TodoList.css";

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        //this.deleteItem=
    }

    addItem(e) {
        if (this._inputEleemnt.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";
        console.log("addItem");
        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        console.log("Key in deleteItem: " + key);
        console.log("Items at delete: " + this.state.items);
    }

    render() {
        return (
            <div className="todolistMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                    delete={this.deleteItem} />
            </div>
        );
    }
}

export default Todolist;