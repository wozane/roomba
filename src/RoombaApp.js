import React, {Component} from "react";
import cleaner from './cleaner.svg';
import './RoombaApp.css';

class RoombaApp extends Component {
  constructor() {
    super()
    this.state = {
      xRoombaPosition: 9,
      yRoombaPosition: 0,
      roombaRotationPosition: 0,
    }
  }

  boardRow = new Array(10).fill('')
  board = Array(10).fill(this.boardRow)

  moveRight() {
    const {xRoombaPosition, roombaRotationPosition, yRoombaPosition } = this.state

    switch (roombaRotationPosition) {
      case 0:
        if (xRoombaPosition === 9) {
          this.rotateCleaner()
        } else {
          this.setState({
            xRoombaPosition: xRoombaPosition + 1
          })
        }
        break
      case 90:
        if (yRoombaPosition === 9) {
          this.rotateCleaner()
        } else {
          this.setState({
            yRoombaPosition: yRoombaPosition + 1
          })
        }
        break
      case 180:
        if (xRoombaPosition === 0) {
          this.rotateCleaner()
        } else {
          this.setState({
            xRoombaPosition: xRoombaPosition -1
          })
        }
        break
      case 270:
        if (yRoombaPosition === 0) {
          this.rotateCleaner()
        } else {
          this.setState({
            yRoombaPosition: yRoombaPosition - 1
          })
        }
        break
      default:
        return null
    }

  }

  rotateCleaner() {
    const { roombaRotationPosition } = this.state

    if (roombaRotationPosition >= 0 && roombaRotationPosition < 270) {
      this.setState({
        roombaRotationPosition: roombaRotationPosition + 90
      })
    } else {
      this.setState({
        roombaRotationPosition: 0
      })
    }
  }

  setRotationClass() {
    const { roombaRotationPosition } = this.state

    switch (roombaRotationPosition) {
      case 0:
        return null
      case 90:
        return 'rotate90'
      case 180:
        return 'rotate180'
      case 270:
        return 'rotate270'
      default:
        return null
    }
  }

  isCleanerVisible(row, column) {
    if (row === this.state.xRoombaPosition && column === this.state.yRoombaPosition) {
      return null
    } else {
      return 'hideCleaner'
    }
  }
  render() {
    const { roombaRotationPosition } = this.state
    console.log(roombaRotationPosition)
    return (
      <React.Fragment>
        <button onClick={() => this.moveRight()}>move right</button>
        <button onClick={() => this.rotateCleaner()}>rotate cleaner</button>
        <div className="Grid">
          {this.board.map((row, rowIndex) => {
            return (
              <div className="Column" key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  return <div key={cellIndex} className="Cell">
                    <img src={cleaner} alt={cleaner} className={`${this.setRotationClass()} ${this.isCleanerVisible(rowIndex, cellIndex)}`}/>
                  </div>
                })}
              </div>
            )
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default RoombaApp;
