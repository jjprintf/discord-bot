#include <stdio.h>
#include <string>
#include <iostream>
#include <dirent.h>

int checkFile(const char *filename);
int checkFolder(const char *foldername);
int checkShell();

int checkFile(const char* filename){
    FILE *file;

    if (file = fopen(filename, "r")) {
        fclose(file);
        return 0;
    } else return 1;

}

int checkFolder(const char* foldername){
    DIR * dir;
    if (dir = opendir(foldername)) {
        closedir(dir);
        return 0;
    } else return 1;
}

int checkShell(){
    auto ret = system(nullptr);

    if (ret != 0)
        return 0;
    else
        return 1;
}