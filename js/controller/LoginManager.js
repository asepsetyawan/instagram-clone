/**
 * @flow
 */
import EventHandler from '../core/EventHandler';

class LoginManager {
  _loggedIn: boolean = false;

  didLogIn(): void {
    this._loggedIn = true;
    EventHandler.emitEvent('didLogIn');
  }

  didLogOut(): void {
    this._loggedIn = false;
    EventHandler.emitEvent('didLogOut');
  }

  loggedIn(): boolean {
    return this._loggedIn;
  }

  async getMoviesFromApi(): Object {
    try {
      let response = await fetch(
        // 'https://facebook.github.io/react-native/movies.json',
        'http://www.iotator.com/api/v1/profile/1',
      );
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new LoginManager();
