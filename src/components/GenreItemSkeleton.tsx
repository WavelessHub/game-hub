import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreItemSkeleton = () => {
  return (
    <Card marginBottom="12px" borderRadius={8} width="190px" padding="8px">
      <HStack>
        <Skeleton borderRadius={8} boxSize="44px" />
        <HStack>
          <SkeletonText width="20" />
        </HStack>
      </HStack>
    </Card>
  );
};

export default GenreItemSkeleton;
