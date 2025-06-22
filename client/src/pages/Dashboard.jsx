// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import TokenCard from "@/components/cards/TokenCard";
// import { fetchPatientDashboard } from "@/services/api";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function Dashboard() {
  const [data, setData] = useState({ tokens: [], beds: [] });

  useEffect(() => {
    fetchPatientDashboard().then((res) => setData(res.data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6">Your Dashboard</h2>
      <Tabs defaultValue="tokens">
        <TabsList>
          <TabsTrigger value="tokens">My Tokens</TabsTrigger>
          <TabsTrigger value="beds">Bed Availability</TabsTrigger>
          <TabsTrigger value="qr">QR Code</TabsTrigger>
        </TabsList>

        <TabsContent value="tokens" className="pt-4">
          {data.tokens.length ? (
            data.tokens.map((t) => <TokenCard key={t.id} token={t} />)
          ) : (
            <p>No tokens found.</p>
          )}
        </TabsContent>

        <TabsContent value="beds" className="pt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hospital</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Available</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.beds.map((b) => (
                <TableRow key={b.id}>
                  <TableCell>{b.hospital}</TableCell>
                  <TableCell>{b.type}</TableCell>
                  <TableCell>{b.isAvailable ? "Yes" : "No"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="qr" className="pt-4">
          {data.tokens[0] ? (
            <TokenCard token={data.tokens[0]} showQRCode />
          ) : (
            <p>No QR code available.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
