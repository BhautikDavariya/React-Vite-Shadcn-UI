import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import {
    DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MasterLayout from '../layout/MasterLayout';
import { DataTable } from '@/components/common/dataTable/DataTable';
import { fetchPortfolios } from '@/store/action/protfolioMainAction';
import { useToast } from "@/components/ui/use-toast"

const Index = () => {
    const { toast } = useToast();
    const dispatch = useDispatch();
    const { portfolio } = useSelector(state => state)

    useEffect(() => {
        dispatch(fetchPortfolios(true))
    }, [])

    function onSubmit(data) {
        toast({
            title: "Select All ",
            description: "Complete = " + data,
          })
      }

    const data = portfolio && portfolio.length ? portfolio.map((items) => {
        return {
            id: items._id,
            portfolio: items.portfolio.name,
            portfolioGroup: items.portfolioGroup.name
        }
    }) : []

    const columns = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) =>{ table.toggleAllPageRowsSelected(!!value);  onSubmit(value)}}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => {row.toggleSelected(!!value); value && onSubmit(JSON.stringify(row))}}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "id",
            header: "id",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("id")}</div>
            ),
        },
        {
            accessorKey: "portfolio",
            header: "portfolio",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("portfolio")}</div>
            ),
        },
        {
            accessorKey: "portfolioGroup",
            header: "portfolioGroup",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("portfolioGroup")}</div>
            ),
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                // const payment = row.original;

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <DotsHorizontalIcon className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                // onClick={() => navigator.clipboard.writeText(payment.id)}
                            >
                                Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>View payment details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    return (
        <MasterLayout>
            <DataTable data={data}
                columns={columns} />
        </MasterLayout>
    )
}

export default Index