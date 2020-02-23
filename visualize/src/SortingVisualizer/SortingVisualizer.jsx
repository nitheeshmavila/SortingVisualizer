import React, { Component } from 'react';
import './SortingVisualizer.css';

const ARRAY_LENGTH = 50;
const PRIMARY_COLOR = 'green';

export default class SortingVisualizer extends Component{
    constructor(props){
        super(props);
        this.state = {
            array: [],
        }
    }
    refreshArray(){
        const array = [];
        for(let i=0; i<ARRAY_LENGTH; i++){
            array.push(randomIntInRange(5,700));
        }
        this.setState({array:array})
    }
    bubbleSort(){
        var array = this.state.array;
        var length = array.length;
        var swapped = false;
        for(var i=0; i<length; i++){
            swapped = false;
            for(var j=0; j<length - i - 1; j++){
                if(array[j] > array[j+1]){
                    swapped = true;
                    [array[j], array[j+1]] = [array[j+1], array[j]];
                }
            }
            if(swapped === false){
                break;
            }
        }
    }
    
    render() {
        const {array} = this.state;
    
        return (
          <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                }}></div>
            ))}
            <button onClick={() => this.refreshArray()}>Generate New Array</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.testSortingAlgorithms()}>
              Test Sorting Algorithms
            </button>
          </div>
        );
      }
    
}

function randomIntInRange(min, max){
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}