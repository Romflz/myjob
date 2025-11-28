import { prisma } from '../index'

export async function createUser(data: { email: string; name: string }) {
  console.log('Creating user with data:', data  )
  return prisma.user.create({ data })
}

export async function getUserById(id: number) {
  return prisma.user.findUnique({ where: { id } })
}