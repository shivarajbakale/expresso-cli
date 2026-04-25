import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAll = async () => {
  return prisma.todo.findMany();
};

export const create = async (title: string) => {
  return prisma.todo.create({
    data: { title },
  });
};

export const update = async (id: number, data: { title?: string; completed?: boolean }) => {
  return prisma.todo.update({
    where: { id },
    data,
  });
};
