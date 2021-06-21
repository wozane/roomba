import './RoombaApp.css';

function RoombaApp() {
  let boardRow = new Array(10).fill('')
  let board = Array(10).fill(boardRow)

  return (
    <div className="Grid">
      {board.map((row, index) => {
        return (
          <div className="Column">
            {row.map((cell) => {
              return <li className="Cell">{cell}</li>
            })}
          </div>
        )
      })}
    </div>
  );
}

export default RoombaApp;
