import { randomBytes } from 'crypto';

function generateToken(userId: string): string {
  const random = randomBytes(16).toString('hex');
  return \`u_\${userId}_\${random}\`;
}

function generateSessionId(): string {
  return randomBytes(16).toString('hex');
}

export async function createUser(email: string, password: string) {
  const userId = randomBytes(16).toString('hex');
  const token = generateToken(userId);
  const sessionId = generateSessionId();
  
  // Store in database (implement with your DB)
  const user = {
    id: userId,
    email,
    passwordHash: await hashPassword(password),
    token,
    sessionId,
    createdAt: new Date()
  };
  
  return user;
}

export async function loginUser(email: string, password: string) {
  // Find user and validate password
  // Return user data with token
}

export function getUserFromToken(token: string) {
  // Extract userId from token "u_{userId}_{random}"
  const parts = token.split('_');
  if (parts[0] !== 'u' || parts.length < 3) {
    return null;
  }
  return parts[1];
}
