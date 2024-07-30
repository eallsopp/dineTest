"use client";

import React, { ReactFragment } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import ImageScrollButtons from "./imageScrollButtons";

const RecipeCard = ({
  data,
  handleRecipe,
  recipe,
  nextDateAvailable,
}: {
  recipe: any;
  handleRecipe: any;
  data: any;
  calDate: any;
  nextDateAvailable: any;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { title, ingredients, description, image } = recipe;

  const capitalize = (str: string) => {
    if (str.length > 1) {
      return str
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    } else {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  };

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-md text-default-500">
            For Dinner: {nextDateAvailable}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Image alt="recipe" height={300} width={400} radius="sm" src={image} />
        <ImageScrollButtons
          currentImg={image}
          data={data}
          setCurrentImg={handleRecipe}
        />
        <p className="text-md">{description}</p>
      </CardBody>
      <CardFooter>
        {/* <Link isExternal href="https://www.google.com">
          test link{" "}
        </Link> */}
        <Button className="primary" onPress={onOpen}>
          View Complete List of Ingredients
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Ingredients
                </ModalHeader>
                <ModalBody>
                  <ul>
                    {ingredients.map((ingredient) => (
                      <li key={ingredient}>{capitalize(ingredient)}</li>
                    ))}
                  </ul>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
