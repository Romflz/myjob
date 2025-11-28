import dotenv from 'dotenv'
import { findUpSync } from 'find-up'

// Only load dotenv in development. Note: in production, env vars will be set in Docker. So we don't need dotenv there.
if (process.env.NODE_ENV !== 'production') {
  const envPath = findUpSync('.env')
  if (envPath) {
    dotenv.config({ path: envPath })
  }
}

// Helper to get required env var (throws if missing)
function required(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

// Helper to get optional env var with default
function optional(name: string, defaultValue: string): string {
  return process.env[name] ?? defaultValue
}

// Export typed environment variables
export const env = {
  NODE_ENV: optional('NODE_ENV', 'development'),
  DATABASE_URL: required('DATABASE_URL'),
  DIRECT_URL: optional('DIRECT_URL', process.env.DATABASE_URL ?? ''),
} as const

// Also export individual vars for convenience
export const { NODE_ENV, DATABASE_URL, DIRECT_URL } = env

// Export helpers for custom env vars
export { required, optional }
