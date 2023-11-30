import ClassRoom from './0-classroom';

export default function intializeRooms() {
  const sizes = [19, 20, 34];
  const rooms = sizes.map((size) => new ClassRoom(size));
  return rooms;
}
