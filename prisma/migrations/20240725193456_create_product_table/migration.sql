-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT,
    "price" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "supCategory" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
