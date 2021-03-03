const compareKey = key =>
  (a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  }

// one liner
// const compareKey = key => (a, b) => a[key] == b[key]? (a[key] < b[key] ? -1 : 1) : 0

export const AZauthor = arr => arr.sort(compareKey('author'))
export const ZAauthor = arr => arr.sort(compareKey('author')).reverse()
export const AZtitle = arr => arr.sort(compareKey("title"))
export const ZAtitle = arr => arr.sort(compareKey("title")).reverse()