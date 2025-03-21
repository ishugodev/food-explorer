import { useState } from "react";

import {
  Container,
  AddTagContainer,
  DeletableTagContainer,
} from "./styles.ts";
import PlusSvg from "../../assets/Plus.svg";
import CloseSvg from "../../assets/Close.svg";

interface TagProps {
  children?: React.ReactNode;
  variant?: "default" | "deletable" | "add";
  onDelete?: () => void;
  onAdd?: (value: string) => void;
}

export function Tag({
  children,
  variant = "default",
  onDelete,
  onAdd,
}: TagProps) {
  const [newTagValue, setNewTagValue] = useState("");

  const handleAddTag = () => {
    if (newTagValue.trim() && onAdd) {
      onAdd(newTagValue);
      setNewTagValue("");
    }
  };

  switch (variant) {
    case "add":
      return (
        <AddTagContainer>
          <input
            type="text"
            placeholder="Adicionar"
            value={newTagValue}
            onChange={(e) => setNewTagValue(e.target.value)}
          />
          <button type="button" onClick={handleAddTag}>
            <img src={PlusSvg} alt="" />
          </button>
        </AddTagContainer>
      );

    case "deletable":
      return (
        <DeletableTagContainer>
          {children}
          <button type="button" onClick={onDelete}>
            <img src={CloseSvg} alt="" />
          </button>
        </DeletableTagContainer>
      );

    default:
      return <Container>{children}</Container>;
  }
}
