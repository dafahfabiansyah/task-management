class User {
  constructor() {
    this.users = this.getUsers() || [];
  }
  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    // return (window.location.href = "../signin.html");

    return {
      success: true,
    };

    // console.log(userData);
  }

//   mengecek apa user sudah atau atau belum
  signInUser(usernameByInput) {
    const userExist = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase()
    );
    if (userExist) {
      // console.log(username)
      return {
        success: true,
        username,
      };
    } else {
      return {
        success: false,
        message: "data tidak ditemukan",
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
