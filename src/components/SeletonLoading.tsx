import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SeletonLoading = () => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SeletonLoading;
