"use client";

import React from "react";

interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: string;
}

const providedData: User[] = [
  {
    id: "1",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    id: "2",
    organization: "Irorun",
    username: "Debby Ogana",
    email: "debby2@irorun.com",
    phone_number: "08160780928",
    date_joined: "Apr 30, 2020 10:00 AM",
    status: "Pending",
  },

  {
    id: "3",
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phone_number: "07060780922",
    date_joined: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted",
  },
  {
    id: "4",
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phone_number: "07003309226",
    date_joined: "Apr 10, 2020 10:00 AM",
    status: "Pending",
  },
  {
    id: "5",
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phone_number: "07060780922",
    date_joined: "Apr 30, 2020 10:00 AM",
    status: "Active",
  },
  {
    id: "6",
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phone_number: "08060780900",
    date_joined: "Apr 10, 2020 10:00 AM",
    status: "Active",
  },
  {
    id: "7",
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phone_number: "07060780922",
    date_joined: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted",
  },
  {
    id: "8",
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phone_number: "08060780900",
    date_joined: "Apr 10, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    id: "9",
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phone_number: "07060780922",
    date_joined: "Apr 30, 2020 10:00 AM",
    status: "Inactive",
  },
  // Other provided data objects here...
];

const repeatDataTo500 = (): User[] => {
  const repeatedData: User[] = [];

  while (repeatedData.length < 500) {
    providedData.forEach((user) => {
      const newUser: User = {
        ...user,
        id: (repeatedData.length + 1).toString(),
      };
      repeatedData.push(newUser);
    });
  }

  return repeatedData.slice(0, 500); // Slice to ensure exactly 500 items
};

const Data: React.FC = () => {
  const users = repeatDataTo500();
  console.log(users);

  return (
    <div>
      <h1>Generated Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
