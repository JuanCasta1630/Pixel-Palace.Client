"use client";
import React, { useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ThemeProvider } from "next-themes";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import FooterLayout from "../components/Footer";
import { FormValues, ReportData } from "../types/types";
import { descargarCSV, generarPDF } from "../utils/reportsFunctions";
import HeaderLayout from "../components/Header";

const Reportes: React.FC = () => {
  const [reportResult, setReportResult] = useState<ReportData[] | null>(null);

  const formik = useFormik({
    initialValues: {
      month: "",
      category: "",
      bestSellers: false,
      topRated: false,
      fileFormat: "pdf",
    } as FormValues,
    validationSchema: Yup.object({
      month: Yup.string().required("Select month"),
      category: Yup.string().required("Select category"),
    }),
    onSubmit: async (
      values: FormValues,
      { setSubmitting }: FormikHelpers<FormValues>
    ) => {
      try {
        const reportData: ReportData[] = [
          { game: "Juego1", quantity: 100, category: "Aventure" },
          { game: "Juego2", quantity: 80, category: "Action" },
          { game: "Juego3", quantity: 90, category: "Action" },
        ];

        setReportResult(reportData);

        if (values.fileFormat === "pdf") {
          await generarPDF(reportData);
        } else if (values.fileFormat === "csv") {
          const archivo = "informe.csv";
          descargarCSV(reportData, archivo);
        }
      } catch (error) {
        console.error("Error al generar el informe:", error);
      }
    },
  });

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className="w-full min-h-screen dark:bg-gray-700 bg-white">
        <HeaderLayout/>
        <Content className="p-4 mt-8">
          <div className=" max-w-md mx-auto ">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col py-20"
            >
              <h1 className="text-2xl font-semibold text-center ">Reports</h1>
              <div className="mb-4 mt-2">
                <label
                  htmlFor="month"
                  className="block dark:text-white text-sm font-bold mb-2"
                >
                  Month
                </label>
                <select
                  id="month"
                  name="month"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.month}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
                {formik.touched.month && formik.errors.month ? (
                  <div className="text-red-500">{formik.errors.month}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block dark:text-white text-sm font-bold mb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select...</option>
                  <option value="adventure">Adventure</option>
                  <option value="action">Action</option>
                </select>
                {formik.touched.category && formik.errors.category ? (
                  <div className="text-red-500">{formik.errors.category}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="block dark:text-white text-sm font-bold mb-2">
                  Options
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      id="bestSellers"
                      name="bestSellers"
                      onChange={formik.handleChange}
                      checked={formik.values.bestSellers}
                      className="mr-2"
                    />
                    <span className="text-sm">Best Sellers</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      id="topRated"
                      name="topRated"
                      onChange={formik.handleChange}
                      checked={formik.values.topRated}
                      className="mr-2"
                    />
                    <span className="text-sm">Top Rated</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      id="fileFormatPdf"
                      name="fileFormat"
                      value="pdf"
                      onChange={formik.handleChange}
                      checked={formik.values.fileFormat === "pdf"}
                      className="mr-2"
                    />
                    <span className="text-sm">PDF</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      id="fileFormatCsv"
                      name="fileFormat"
                      value="csv"
                      onChange={formik.handleChange}
                      checked={formik.values.fileFormat === "csv"}
                      className="mr-2"
                    />
                    <span className="text-sm">CSV</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="button1 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Download Report
              </button>
            </form>

            {reportResult && (
              <div>
                <h2 className="text-xl font-bold">Report Result</h2>
                <table
                  id="my-table"
                  className="w-full border-collapse border border-gray-900"
                >
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="p-2 border border-gray-700">Game</th>
                      <th className="p-2 border border-gray-700">Quantity</th>
                      <th className="p-2 border border-gray-700">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportResult.map((item, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-800" : ""}
                      >
                        <td className="p-2 border border-gray-300">
                          {item.game}
                        </td>
                        <td className="p-2 border border-gray-300">
                          {item.quantity}
                        </td>
                        <td className="p-2 border border-gray-300">
                          {item.category}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </Content>
        <FooterLayout />
      </Layout>
    </ThemeProvider>
  );
};

export default Reportes;
