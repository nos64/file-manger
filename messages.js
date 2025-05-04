export const getColorText = (color, text) => {
  switch (color) {
    case 'green':

      return `\x1b[32m${text}\x1b[0m`;

    case 'yellow':

      return `\x1b[33m${text}\x1b[0m`;

    case 'red':

      return `\x1b[31m${text}\x1b[0m`;
  }
}

export const showInvalidInput = () => {
  console.log(getColorText('red', 'Invalid input'));
};

export const showOperationFailed = () => {
  console.log(getColorText('red', 'Operation failed'));
};

export const throwInvalidInputError = () => {
  throw new Error('Invalid input');
}
