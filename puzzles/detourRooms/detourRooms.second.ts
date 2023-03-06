export default function detourRooms(rooms: number[][]): boolean {
  const queue = rooms[0] ?? [];
  const visited = new Set([0]);

  while (queue.length && rooms.length !== visited.size) {
    const room = queue.pop();

    if (typeof room === 'number') {
      if (visited.has(room)) {
        continue;
      }

      visited.add(room);
      const keys = rooms[room] ?? [];
      queue.push(...keys);
    }
  }

  return rooms.length === visited.size;
}
