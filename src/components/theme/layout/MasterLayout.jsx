import ModeToggle from '@/components/ui/mode-toggle'
import { setLoading } from '@/store/action/loadingAction';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DashboardHeader } from './header';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button';
import SideBar from './SideBar';
import { DataTable } from '../dataTable/DemoTable';
import {
  CaretSortIcon,
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


const MasterLayout = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state)
    useEffect(() => {
        dispatch(setLoading(true))
    }, [])
    console.log('isLoading', isLoading)

    const data = [
        {
            id: "m5gr84i9",
            amount: 316,
            status: "success",
            email: "ken99@yahoo.com",
            phone: 999999999,
        },
        {
            id: "3u1reuv4",
            amount: 242,
            status: "success",
            email: "Abe45@gmail.com",
            phone: 999999999,
        },
        {
            id: "derv1ws0",
            amount: 837,
            status: "processing",
            email: "Monserrat44@gmail.com",
            phone: 999999999,
        },
        {
            id: "5kma53ae",
            amount: 874,
            status: "success",
            email: "Silas22@gmail.com",
            phone: 999999999,
        },
        {
            id: "bhqecj4p",
            amount: 721,
            status: "failed",
            email: "carmella@hotmail.com",
            phone: 999999999,
        },
    ];

    const columns = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("status")}</div>
            ),
        },
        {
            accessorKey: "email",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Email
                        <CaretSortIcon className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
        },
        {
            accessorKey: "amount",
            header: () => <div className="text-right">Amount</div>,
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue("amount"));

                // Format the amount as a dollar amount
                const formatted = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amount);

                return <div className="text-right font-medium">{formatted}</div>;
            },
        },
        {
            accessorKey: "phone",
            header: "phone",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("phone")}</div>
            ),
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const payment = row.original;

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
                                onClick={() => navigator.clipboard.writeText(payment.id)}
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
        <div>
            <div>
                <DashboardHeader heading={'Acidimetry'} className={'p-3'}>
                    <div className='flex'>
                        <div className='me-2'><ModeToggle /></div>
                        <div>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </DashboardHeader>
            </div>
            <div className='flex'>
                <div>
                    <SideBar />
                </div>
                <div className='w-full h-[calc(100vh-66px)]'>
                    <div className='p-10'>
                        <DataTable data={data}
                            columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasterLayout