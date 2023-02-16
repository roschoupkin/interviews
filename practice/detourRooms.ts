/**
  На вход имеем список из комнат, в комнате могут быть ключи к другим комнатам
  Остальные комнаты закрыты, начинаем с самой первой в списке
  Написать метод, который вернет true, если обошел все комнаты и false, если не удалось

  [[], [1, 2], []] -> false
  [[1], [2], [], []] -> false
  [[1, 2], [], []] -> true
  [[1, 2], [3], [], []] -> true
  [[1, 2], [2], [1, 3], [4], [1]] -> true
 */

export function detourRooms1(list: number[][]): boolean {
  const rooms = list.reduce((r, keys, room) => {
    return r.set(room, keys);
  }, new Map<number, number[]>());

  const queue: number[] = rooms.get(0) ?? [];

  rooms.delete(0);

  while (queue.length) {
    const room = queue.pop();

    if (typeof room === 'number') {
      const keys = rooms.get(room) ?? [];
      queue.push(...keys);
      rooms.delete(room);
    }

    if (rooms.size === 0) {
      break;
    }
  }

  return rooms.size === 0;
}

export function detourRooms2(rooms: number[][]): boolean {
  const queue = rooms[0] ?? [];
  const visited = new Set([0]);

  while (queue.length) {
    const room = queue.pop();

    if (typeof room === 'number') {
      if (visited.has(room)) {
        continue;
      }

      visited.add(room);
      const keys = rooms[room] ?? [];
      queue.push(...keys);
    }

    if (rooms.length === visited.size) {
      break;
    }
  }

  return rooms.length === visited.size;
}
