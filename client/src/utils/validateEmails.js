export default (emails) => {
  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

  if (invalidEmails.slice(-1)[0] === "") {
    return 'Cannot end recipient list with a comma';
  }

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

};
