"use client"
import { useEffect, useState } from "react"
import { getAllCustomers } from "../api/customers"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function CustomersPage() {
  const [customers, setCustomers] = useState([])
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await getAllCustomers()
        setCustomers(response?.data || [])
      } catch (error) {
        console.error("Failed to fetch customers:", error)
      }
    }
    fetchCustomers()
  }, [])

  const openCustomerDialog = (customer) => {
    setSelectedCustomer(customer)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setSelectedCustomer(null)
  }

  return (
    <div className="container px-6 mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Customers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer) => (
          <Card key={customer.id} className="p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              {customer?.photo?.original_url && (
                <Image
                  src={customer.photo.original_url}
                  alt={customer.name || "Customer"}
                  width={120}
                  height={120}
                  className="rounded-full mb-4 object-cover"
                />
              )}
              
              <h3 className="text-xl font-semibold">{customer.name || "No Name"}</h3>
              
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => openCustomerDialog(customer)}
              >
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedCustomer && (
            <>
              <DialogHeader>
                <DialogTitle>Customer Details</DialogTitle>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="flex flex-col items-center">
                  {selectedCustomer?.photo?.original_url && (
                    <Image
                      src={selectedCustomer.photo.original_url}
                      alt={selectedCustomer.name || "Customer"}
                      width={150}
                      height={150}
                      className="rounded-full mb-4 object-cover"
                    />
                  )}
                  
                  <h3 className="text-2xl font-bold">
                    {selectedCustomer.name || "No Name"}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-medium">Email:</p>
                    <p>{selectedCustomer.email || "-"}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-medium">Phone:</p>
                    <p>{selectedCustomer.phone || "-"}</p>
                  </div>
                  
                  <div className="space-y-2 col-span-2">
                    <p className="font-medium">Address:</p>
                    <p>{selectedCustomer.address || "-"}</p>
                  </div>
                  
                  {/* Add more customer fields as needed */}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}