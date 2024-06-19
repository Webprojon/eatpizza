-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "itemCategory" TEXT NOT NULL,
    "itemImg" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemDescription" TEXT,
    "itemPrice" INTEGER NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
