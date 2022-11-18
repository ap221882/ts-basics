interface User {
  id: number;
  info?: {
    email?: string;
  };
}

function getEmail(user: User) {
  if (user.info?.email) {
    return user.info.email;
  } else {
    return "";
  }
}

function getEmail2(user: User) {
  return user.info?.email || "";
}

//  Note: In case of function passed we can use func?.()
