import { prisma } from '@/config';

async function getHotels() {
    return prisma.event.findMany();
}

export const hotelRepository = {
    getHotels
};
