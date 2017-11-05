export class UserModel {
  id: number;
  name: string;
  email: string;
  address: string;
  dateOfBirth: string;
  gender: string;
  profilePictureUrl: string;

  constructor(param?: UserModel) {
    if (param) {
      Object.assign(this, param);
    }
  }

  // userModel.exampleUser   -y nem kell new és ()
  static get exampleUser(): UserModel {
    return {
      id: 0,
      name: 'Legyek Réka Matlida',
      email: 'legyekrekamatilda@valami.com',
      address: 'Futrinka utca',
      dateOfBirth: '2001.01.01',
      gender: 'female',
      profilePictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nBubms8tp5EDXG6LBhVyy4AES2WCqceh674hyF6rNwjYoJ4ddQ'
  };
  }
  static get emptyUser(): UserModel {
    return {
      id: 0,
      name: '',
      email: '',
      address: '',
      dateOfBirth: '',
      gender: '',
      profilePictureUrl: ''
    };
  }
}
