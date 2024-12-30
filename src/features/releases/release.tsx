import Flex from "src/components/ui/flex";
import ReleaseActions from "./releases-actions";
import Table from "src/components/ui/table";
import { useFuelsContext } from "../fuels/filters/fuels.context";
import { useGasStationsContext } from "../gas-stations/filters/gas-stations.context";
import { useGetReleases } from "./releases.hooks";
import { usePaginationContext } from "src/components/pagination/pagination.context";
import PaginationSelect from "src/components/pagination";
import Button from "src/components/ui/button";
import ReleasesModal from "./releases-modal";
import GasStationsSelect from "../gas-stations/filters";
import FuelsSelect from "../fuels/filters";
import type { TRelease } from "./releases.types";
import { generatePDF } from "src/utils/generatePDF";
import type { ReactNode } from "react";
import { StyledFilters } from "./releases.styles";
import { useAuth } from "../auth/auth.context";

type teste = {
  columns: ReadonlyArray<{
    header: string;
    accessor: string;
    render?: (row: TRelease) => ReactNode;
  }>;
};

const Release = ({ columns }: teste) => {
  const { user } = useAuth();

  const { gasStation } = useGasStationsContext();
  const { fuel } = useFuelsContext();
  const { pageSize } = usePaginationContext();
  const { data: releases, isFetching } = useGetReleases({
    fuelId: fuel._id,
    gasStationId: gasStation?._id,
    pageSize: pageSize?._id,
  });

  const onPrint = () => {
    generatePDF(
      `Relatório de lançamentos (${gasStation.name} - ${fuel.name})`,
      "lançamentos.pdf",
      releases,
      [...columns]
    );
  };

  return (
    <Flex gap="50">
      <ReleasesModal />
      <ReleaseActions />
      {!(user?.profile?.name === "funcionário") && (
        <Flex gap="25">
          <Flex
            gap="50"
            wrap="wrap"
            direction="row"
            align="center"
            justify="space-between"
          >
            <StyledFilters>
              <GasStationsSelect />
              <FuelsSelect />
              <PaginationSelect />
            </StyledFilters>
            <Button
              size="large"
              variant="secondary"
              style={{ flex: 1 }}
              onClick={() => onPrint()}
            >
              imprimir
            </Button>
          </Flex>
          <Table
            data={releases}
            columns={[...columns]}
            isLoading={isFetching}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default Release;
