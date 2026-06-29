"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchModal({ open, onClose, placeholder }) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>

        {/* Info Alert */}
        <Alert className="mb-4 bg-green-50 border border-green-200 text-green-800">
          <Info className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-700">Search any authentic fruit .</AlertTitle>
        </Alert>
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={searchTerm}
            placeholder={placeholder}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            autoFocus
          />
          <Button
            onClick={handleSearch}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
