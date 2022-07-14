import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Circle size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    type: "groupHeader",
    groupTitle: "Component",
  },

  {
    id: "user",
    title: "User ",
    type: "collapse",
    icon: <Icon.Users size={20} />,
    children: [
      {
        id: "userList",
        title: "User ist",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/user/userList",
      },

      // {
      //   id: "driverRatings",
      //   title: "Driver Ratings",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/driver/driverRatings",
      // },

      // {
      //   id: "withdrawalRequests",
      //   title: "Withdrawal Requests",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/driver/withdrawalRequests",
      // },
    ],
  },
  {
    id: "astrologerList",
    title: "Astrologer List",
    type: "item",
    icon: <Icon.Circle size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/astrology/astrologerList",
  },
  {
    id: "status",
    title: "Status ",
    type: "collapse",
    icon: <Icon.Users size={20} />,
    children: [
      {
        id: "userList",
        title: "Daily",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/status/approvedDrivers",
      },
      {
        id: "astro",
        title: "Weekly",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/status/approvalPendingDrivers",
      },

      {
        id: "driverRatings",
        title: "Monthly",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/status/driverRatings",
      },
      {
        id: "negativeBalanceDrivers",
        title: "yearly",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/status/negativeBalanceDrivers",
      },
      // {
      //   id: "withdrawalRequests",
      //   title: "Withdrawal Requests",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/driver/withdrawalRequests",
      // },
    ],
  },
  {
    id: "report ",
    title: "Report ",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "callingReport ",
        title: "Calling Report ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/userride/u",
      },
      {
        id: "rechargeReport  ",
        title: "Recharge Report ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/userride/userRideList",
      },
    ],
  },

  {
    id: "transaction",
    title: "Transaction ",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "transactionHistory",
        title: "Transaction History ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/vehicle/vehicleTypes",
      },
      {
        id: "walletManagement ",
        title: "Wallet management ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/vehicle/vehicleModel",
      },
    ],
  },

  {
    id: "notificationList",
    title: "Notification",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/notification/notificationList",
  },

  {
    id: "membership",
    title: "Membership",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "membershipList",
        title: "Membership plan list",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/membership/membershipList",
      },
    ],
  },
  {
    id: "aboutus",
    title: "About Us ",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/about/AllaboutUs",
  },
  {
    id: "helpUs",
    title: "Help Us",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/helpUs/HelpUs",
  },

  {
    id: "TermConditionList",
    title: "Term And Condition ",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/termscondition/TermConditionList",
  },
];
export default navigationConfig;
