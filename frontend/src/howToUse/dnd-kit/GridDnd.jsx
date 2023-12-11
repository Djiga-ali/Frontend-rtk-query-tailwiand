import React, { useState } from 'react'
import { data } from "./data";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";




const SortableUser = ({ user }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
    } = useSortable({ id: user.id });
    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
    };
  
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="w-full"
      >
        {user.name}
      </div>
    );
  };

const GridDnd = () => {
    const [users, setUsers] = useState(data);
  const [inputValue, setInputValue] = useState("");
  const addUser = () => {
   const newUser = {
      id: Date.now().toString(),
      name: inputValue,
    };
    setInputValue("");
    setUsers((users) => [...users, newUser]);
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setUsers((users) => {
      const oldIndex = users.findIndex((user) => user.id === active.id);
      const newIndex = users.findIndex((user) => user.id === over.id);
      return arrayMove(users, oldIndex, newIndex);
    });
  };


  return (
    <div className="flex flex-col justify-center items-center">
      <div>Total: {users.length}</div>
      <div className=" ">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='w-60 border'
        />
        <button onClick={addUser}>Add user</button>
      </div>
      <div className="w-80 border">
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={users} strategy={verticalListSortingStrategy}>
            {users.map((user) => (
                <div className='w-full border-b' key={user.id}>

              <SortableUser  user={user} className=" w-80 h-20 border" />
                </div>
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}

export default GridDnd