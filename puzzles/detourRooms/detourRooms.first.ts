export default function detourRooms(list: number[][]): boolean {
  const rooms = list.reduce((r, keys, room) => r.set(room, keys), new Map<number, number[]>());

  const queue: number[] = rooms.get(0) ?? [];

  rooms.delete(0);

  while (queue.length && rooms.size) {
    const room = queue.pop();

    if (typeof room === 'number') {
      const keys = rooms.get(room) ?? [];
      queue.push(...keys);
      rooms.delete(room);
    }
  }

  return rooms.size === 0;
}
