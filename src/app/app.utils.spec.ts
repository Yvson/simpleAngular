// Angular
import {TestBed} from "@angular/core/testing";

// Services
import {WindowService} from "shared/common/services/window/window.service";

// Utils
import {AppUtils} from "app/app.utils";


describe('AppUtils', () => {
  let windowServiceMock: WindowService = new WindowService();
  let appUtilsService: AppUtils = new AppUtils(windowServiceMock);

  describe('getBaseAppUrl', () => {
    it('should return empty string', () => {
      spyOn(windowServiceMock, 'pathname').and.returnValue("/");
      expect(appUtilsService.getBaseAppUrl("")).toEqual("");
    });

    it('should return "test"', () => {
      spyOn(windowServiceMock, 'pathname').and.returnValue("/test");
      expect(appUtilsService.getBaseAppUrl("test")).toEqual("test");
    });

    it('should return "subPath"', () => {
      spyOn(windowServiceMock, 'pathname').and.returnValue("/subPath");
      expect(appUtilsService.getBaseAppUrl("")).toEqual('subPath');
    });

    it('should return "shellPath/remoteSubPath"', () => {
      spyOn(windowServiceMock, 'pathname').and.returnValue("/shellPath/remoteSubPath");
      expect(appUtilsService.getBaseAppUrl("remoteSubPath")).toEqual('shellPath/remoteSubPath');
    });

    it('should return "shellPath1/shellPath2/remoteSubPath"', () => {
      spyOn(windowServiceMock, 'pathname').and.returnValue("/shellPath1/shellPath2/remoteSubPath");
      expect(appUtilsService.getBaseAppUrl("remoteSubPath")).toEqual('shellPath1/shellPath2/remoteSubPath');
    });

    it('should return "Path1/Path2/Path1"', () => {
      spyOn(windowServiceMock, 'pathname').and.returnValue("/Path1/Path2/Path1");
      expect(appUtilsService.getBaseAppUrl("Path1")).toEqual('Path1/Path2/Path1');
    });
  })

})
