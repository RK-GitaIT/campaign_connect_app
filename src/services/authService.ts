interface User {
  id: string;
  email: string;
  name: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<User> {
    // TODO: Implement actual API call
    console.log('Login attempt:', credentials)
    return {
      id: '1',
      email: credentials.email,
      name: 'Test User',
    }
  },

  async logout(): Promise<void> {
    // TODO: Implement actual API call
    console.log('Logging out')
  },

  async getCurrentUser(): Promise<User | null> {
    // TODO: Implement actual API call
    return null
  }
} 