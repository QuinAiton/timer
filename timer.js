const args = process.argv.slice(2)
const timer = (args) => {
  for (const time of args) {
    let number = Number(time);
    if (time > 0) {
      setTimeout(() => {
        process.stdout.write('beeep')
        process.stdout.write('\n')
      }, number * 1000)
    }
  }
}

timer(args);