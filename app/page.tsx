"use client";

import "./page.scss";
import { Header } from "./components/header";
import { Card } from "./components/card";
import { Button } from "./components/button";
import { useState } from "react";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <div className="list-container">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="actions">
        <Button
          label="Click Me"
          outlined
          rounded
          size="large"
          hasIcon
          iconName="ClickIcon"
        />
        <Button
          label="Click Me"
          size="medium"
          rounded
          hasIcon
          iconName="PhoneIcon"
        />
        <Button
          label="Click Me"
          outlined
          size="small"
          rounded
        />
      </div>
    </div>
  );
}
