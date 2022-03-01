CREATE TABLE [dbo].[Usuario] (
    [Id]              INT          IDENTITY (1, 1) NOT NULL,
    [Nombre]          VARCHAR (50) NOT NULL,
    [Apellido]        VARCHAR (50) NOT NULL,
    [FechaNacimiento] DATETIME     NOT NULL,
    [Contrasena]       VARBINARY(max) NOT NULL
    CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED ([Id] ASC)
);
