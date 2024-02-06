function superbowlWin(record) {
    const winningYear = record.find((game) => game.result === "W");
    if (winningYear) {
      return winningYear.year;
    } else {
      return undefined
    }
  }
  
  const winYear = superbowlWin(record);
  console.log(winYear);